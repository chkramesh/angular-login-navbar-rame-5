package com.grokonez.jwtauthentication.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.grokonez.jwtauthentication.model.Member;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/test")
public class TestRestAPIs {
	
	@GetMapping("/api/test/user")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	public String userAccess() {
		return ">>> User Contents!";
	}

	@GetMapping("/api/test/pm")
	@PreAuthorize("hasRole('PM') or hasRole('ADMIN')")
	public String projectManagementAccess() {
		return ">>> Project Management Board";
	}
	
	@GetMapping("/api/test/admin")
	@PreAuthorize("hasRole('ADMIN')")
	public String adminAccess() {
		return ">>> Admin Contents";
	}
	
	private List<Member> membersList = createMemberList();
	
//	@GetMapping("/api/test/members")
	@GetMapping("/members")
	public List<Member> getMembers() {
		System.out.println("TestRestAPIs getMembers() ##############");
		return membersList;
	}
		
	
	private static List<Member> createMemberList() {
		List<Member> tempMembers = new ArrayList<>();
		Member mem1 = new Member();
		mem1.setId(41);
		mem1.setFirst_name("Joan");
		mem1.setLast_name("Brown");
		mem1.setUser_name("jbrown");
		mem1.setCountry("Canada");

		Member mem2 = new Member();
		mem2.setId(40);
		mem2.setFirst_name("Mort");
		mem2.setLast_name("Johnston");
		mem2.setUser_name("morty");
		mem2.setCountry("Canada");
		
		tempMembers.add(mem1);
		tempMembers.add(mem2);
		return tempMembers;
		
//		 private String id;
//		 private String first_name;
//		 private String last_name;
//		 private String user_name;
//		 private String country;
	}
}