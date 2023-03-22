package ru.kata.spring.boot_security.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import ru.kata.spring.boot_security.demo.models.User;
import ru.kata.spring.boot_security.demo.services.RoleService;
import ru.kata.spring.boot_security.demo.services.UserService;

import java.security.Principal;

@Controller
public class AdminController {
    private final UserService userService;

    private final RoleService roleService;

    @Autowired
    public AdminController(UserService userService, RoleService roleService) {
        this.userService = userService;
        this.roleService = roleService;
    }
    @GetMapping("/admin")
    public String index(Model model, Principal principal) {
        Long id = userService.findByUsername(principal.getName()).getId();
        model.addAttribute("users", userService.allUsers());
        model.addAttribute("user", new User());
        model.addAttribute("infoTop", userService.findUserById(id));
        model.addAttribute("list", roleService.getRoles());
        return "listUsers";
    }


}
