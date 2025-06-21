package vn.aims.BookSeller.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vn.aims.BookSeller.Entity.Role;

public interface RoleRepo extends JpaRepository<Role, Integer> {
    public Role findByName(String name);

}
