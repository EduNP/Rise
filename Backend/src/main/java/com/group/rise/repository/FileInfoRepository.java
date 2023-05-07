package com.group.rise.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.group.rise.model.Filesinfos;

@Repository
public interface FileInfoRepository extends CrudRepository<Filesinfos, Long>{
    
}
