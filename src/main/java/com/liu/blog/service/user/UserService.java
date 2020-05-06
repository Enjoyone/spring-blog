package com.liu.blog.service.user;

import com.liu.blog.entity.User;
import com.liu.blog.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.factory.PasswordEncoderFactories;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class UserService {


    @Autowired   //  自动导入
    private UserRepository userRepository;

    //    注册
    public User addUser(User user) {
//        PasswordEncoder encoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
//        user.setUserPWD(encoder.encode(user.getUserPWD()));

        return userRepository.save(user);
    }


    //    登录
    @ResponseBody
    public User checkUser(String userName, String userPWD) {

        List<User> userList = userRepository.findByUserNameAndStatusTrue(userName);
        if (userList.size() < 1) {
            return null;
        } else {
            User user = userList.get(0);
            if (user.getUserPWD().equals(userPWD)) {
                return user;
            } else {
                return null;

            }
        }

    }

    //    查询
    public List<User> findAll() {
        return userRepository.findAll();
    }

    public User getOne(int userID) {
        return userRepository.getOne(userID);
    }

    //    修改个人信息
    @Transactional
    public int updateInfo(User user, int userID) {
        return userRepository.updateInfo(user.getUserName(), user.getGender(), user.getName(), user.getIntroduction(), userID);
    }

    //修改密码
    @Transactional
    public int updateUserPWD(String newPWD, int userID) {
        return userRepository.updateUserPWD(newPWD, userID);
    }

    //修改手机 微信 email
    @Transactional
    public int updateContent(String type, String content, int userID) {
        switch (type) {
            case "phone":
                return userRepository.updatePhone(content, userID);
            case "wechat":
                return userRepository.updateWechat(content, userID);
            case "email":
                return userRepository.updateEmail(content, userID);
            default:
                return -1;
        }
    }

    //    修改用户状态
    @Transactional
    public int updateUserStatus(int userID, boolean status) {
        return userRepository.updateUserStatus(status, userID);

    }

}
