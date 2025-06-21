package vn.aims.BookSeller.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.aims.BookSeller.Entity.Role;
import vn.aims.BookSeller.Repository.RoleRepo;

import java.util.List;

@Service
public class RoleService {
    private RoleRepo roleRepo;
    @Autowired
    public RoleService(RoleRepo roleRepo){
        this.roleRepo=roleRepo;
    }

    public List<Role> findAll(){
        return this.roleRepo.findAll();
    }

    public Role findByName(String name){
        return this.roleRepo.findByName(name);
    }
}
