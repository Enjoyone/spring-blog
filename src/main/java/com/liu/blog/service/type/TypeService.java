package com.liu.blog.service.type;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.liu.blog.entity.Type;
import com.liu.blog.repository.TypeRepository;

@Service
public class TypeService {
	@Autowired   //  自动导入
	private TypeRepository typeRepository;

//	添加
	public Type addType(Type type) {
		return typeRepository.save(type);
	}

//	修改
	public Type updateType(Type type){
		typeRepository.updateTypeName(type);
		return type;
	}

//	修改2
	public int updateType2(int typeID,String typeName){
		Type type=typeRepository.getOne(typeID);
		type.setTypeName(typeName);
		return typeID;
	}


//	删除
	public void deleteType(int typeID){
		typeRepository.deleteById(typeID);

	}



//	禁用
	public boolean blockStatus(int typeID){
		Type type=typeRepository.getOne(typeID);
		type.setStatus(false);
		return true;
	}
	
	
}


	
	