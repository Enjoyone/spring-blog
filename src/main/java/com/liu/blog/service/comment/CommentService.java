package com.liu.blog.service.comment;


import com.liu.blog.entity.Comment;
import com.liu.blog.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {
    @Autowired
    private CommentRepository commentRepository;


    public Comment addCommnet(Comment comment) {

        return commentRepository.save(comment);
    }


    public List<Comment> findAllComments(int articleID){
        return commentRepository.findAllComments(articleID);
    }

}
