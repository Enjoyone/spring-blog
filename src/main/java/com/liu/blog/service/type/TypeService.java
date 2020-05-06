package com.liu.blog.service.type;

import com.liu.blog.entity.Article;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.liu.blog.entity.Type;
import com.liu.blog.repository.TypeRepository;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class TypeService {
    @Autowired   //  自动导入
    private TypeRepository typeRepository;

    //	查询所有type
    public List<Type> showAllTypes() {
        return typeRepository.findAll();
    }


    public List<Type> showTypesByUserID(int userID) {
        return typeRepository.backByUserID(userID);
    }

    public Type getOne(int typeID) {
        return typeRepository.getOne(typeID);
    }

    //	添加
    public Type addType(Type type) {
        return typeRepository.save(type);
    }


    //	修改
    @Transactional
    public int updateType(int typeID, String typeName) {
        return typeRepository.updateType(typeName, typeID);
    }


    //	删除
    @Transactional
    public int deleteType(int typeID) {
        List<Article> articles = typeRepository.backByTypeID(typeID);
        if (articles.size() > 0) {
            return -1;
        }
        typeRepository.deleteById(typeID);
        if (!typeRepository.existsById(typeID)) {
            return 1;
        } else {
            return 0;
        }
    }


    //	禁用
    @Transactional
    public int blockType(int typeID) {
        boolean status = false;

        Type type = typeRepository.getOne(typeID);
        status = !type.isStatus();

        return typeRepository.blockType(status, typeID);
    }


}


	
	