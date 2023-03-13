package ru.kata.spring.boot_security.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.ldap.embedded.EmbeddedLdapProperties;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.kata.spring.boot_security.demo.Dao.UserDao;
import ru.kata.spring.boot_security.demo.models.User;

import java.security.Principal;

@Controller
public class UserController {
    private final UserDao userDao;
    @Autowired
    public UserController(UserDao userDao) {
        this.userDao = userDao;
    }

    @GetMapping("/user")
    public String infoUser(Principal principal, Model model) {
        User user = userDao.findByUsername(principal.getName());
        model.addAttribute("infoUser", user);
        return "user";
    }
}
