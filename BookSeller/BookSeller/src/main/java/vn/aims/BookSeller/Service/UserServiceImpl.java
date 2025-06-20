package vn.aims.BookSeller.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import vn.aims.BookSeller.DTO.request.UserUpdateRequest;
import vn.aims.BookSeller.Entity.Role;
import vn.aims.BookSeller.Entity.User;
import vn.aims.BookSeller.Repository.RoleRepo;
import vn.aims.BookSeller.Repository.UserRepo;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepo userRepo;

    @Autowired
    private RoleRepo roleRepository;



    @Override
    public User findByUsername(String username) {
        return userRepo.findByUsername(username);
    }

    @Override
    public User save(User user) {
        if (user.getId() == null && userRepo.findByUsername(user.getUsername()) != null) {
            throw new RuntimeException("Username đã tồn tại: " + user.getUsername());
        }

        Set<Role> roles = new HashSet<>();
        for (Role role : user.getRoles()) {
            Role existingRole = roleRepository.findById(role.getId())
                    .orElseThrow(() -> new RuntimeException("Role không tồn tại với id: " + role.getId()));
            roles.add(existingRole);
        }
        roles.add(this.roleRepository.findByName("ROLE_USER")); //khi tao moi user luon la ROLE_USER
        user.setRoles(roles);

        return userRepo.save(user);
    }

    @Override
    public List<User> findAll() {
        return userRepo.findAll();
    }

    @Override
    public Optional<User> findById(Integer id) {
        return userRepo.findById(id);
    }

    @Override
    public void deleteById(Integer id) {
        userRepo.deleteById(id);
    }

    @Override
    public User updateUser(int id, UserUpdateRequest u){
        User user =getUser(id);

        user.setPassword(u.getPassword());
        user.setUsername(u.getUsername());
        user.setPhone(u.getPhone());
        return userRepo.save(user);
    }

    public User getUser(Integer id){
        return userRepo.findById(id).orElseThrow(()->new RuntimeException("User not found"));
    }


    @Override

    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepo.findByUsername(username);
        if(user == null){
            throw new UsernameNotFoundException("User not found");
        }
        return new org.springframework.security.core.userdetails.User(user.getUsername(),
                user.getPassword(),
                rolesToAuthorities(user.getRoles()));
    }

    private Collection<? extends GrantedAuthority> rolesToAuthorities(Collection<Role> roles){
        return roles.stream()
                .map(role -> new SimpleGrantedAuthority(role.getName()))
                .collect(Collectors.toList());
    }



}
