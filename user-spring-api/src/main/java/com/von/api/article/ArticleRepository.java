package com.von.api.article;

import org.springframework.data.jpa.repository.JpaRepository;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public interface ArticleRepository extends JpaRepository<Article,Long> {


}
