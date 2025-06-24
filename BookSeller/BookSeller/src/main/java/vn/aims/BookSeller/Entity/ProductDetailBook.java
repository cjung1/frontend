package vn.aims.BookSeller.Entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.*;

@Entity
@Data
@Table(name = "product_detail_book")
public class ProductDetailBook {

    @Id
    @Column(name = "product_id")
    private Integer productId;

    @Column(name = "authors")
    private String authors;

    @Column(name = "cover_type")
    private String coverType;

    @Column(name = "publisher")
    private String publisher;

    @Column(name = "publication_date")
    private LocalDate publicationDate;

    @Column(name = "pages")
    private Integer pages;

    @Column(name = "language")
    private String language;

    @Column(name = "genre")
    private String genre;

    // Getters and Setters ...

    public String getAuthors() {
        return authors;
    }

    public void setAuthors(String authors) {
        this.authors = authors;
    }

    public String getCoverType() {
        return coverType;
    }

    public void setCoverType(String coverType) {
        this.coverType = coverType;
    }

    public String getPublisher() {
        return publisher;
    }

    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }

    public LocalDate getPublicationDate() {
        return publicationDate;
    }

    public void setPublicationDate(LocalDate publicationDate) {
        this.publicationDate = publicationDate;
    }

    public Integer getPages() {
        return pages;
    }

    public void setPages(Integer pages) {
        this.pages = pages;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }
}

