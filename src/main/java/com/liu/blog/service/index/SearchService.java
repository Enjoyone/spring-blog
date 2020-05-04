package com.liu.blog.service.index;

import com.liu.blog.entity.Article;
import com.liu.blog.entity.User;
import com.liu.blog.repository.ArticleRepository;
import com.liu.blog.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SearchService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ArticleRepository articleRepository;

    //    搜索
//    根据用户名
    public List<User> searchByUserName(String searchContent) {
        return userRepository.findByUserNameContains(searchContent);
    }

    //    根据文章标题
    public List<Article> searchByArticleTitle(String searchContent) {

        return articleRepository.findByArticleTitleContains(searchContent);

    }


}
