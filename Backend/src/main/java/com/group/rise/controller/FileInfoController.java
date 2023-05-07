package com.group.rise.controller;

import java.util.Optional;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.group.rise.model.Filesinfos;
import com.group.rise.repository.FileInfoRepository;

@RestController
@RequestMapping(value = "/files")
public class FileInfoController {
    @Autowired
    private FileInfoRepository fileInfoRepository;

    @GetMapping(value = "/{id}", produces = "application/json")
    public ResponseEntity get(@PathVariable(value = "id") Long id)  {
        Optional<Filesinfos>  fileInfo = fileInfoRepository.findById(id);

        return new ResponseEntity(fileInfo.get(), HttpStatus.OK);
    }

    @GetMapping(value = "/", produces = "application/json")
    public ResponseEntity getAll() {
        List<Filesinfos> fileInfos = (List<Filesinfos>) fileInfoRepository.findAll();
        
        return new ResponseEntity(fileInfos, HttpStatus.OK);
    }

    @PostMapping(value = "/", produces = "application/json")
    public ResponseEntity create(@RequestBody Filesinfos fileInfo) {
        Filesinfos savedFileInfo = fileInfoRepository.save(fileInfo);

        return new ResponseEntity<>(savedFileInfo, HttpStatus.OK);
    }

    @PutMapping(value = "/", produces = "application/json")
    public ResponseEntity<Filesinfos> update(@RequestBody Filesinfos fileInfo) {
        Filesinfos savedFileInfo = fileInfoRepository.save(fileInfo);
        
        return new ResponseEntity<>(savedFileInfo, HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}", produces = "application/json")
    public ResponseEntity delete(@PathVariable(value = "id") Long id) {
        fileInfoRepository.deleteById(id);

        return new ResponseEntity(HttpStatus.OK);
    }
}
