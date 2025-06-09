package vn.aims.BookSeller.Entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "product_detail_dvd")
public class ProductDetailDVD {

    @Id
    @Column(name = "product_id")
    private Integer productId;

    @OneToOne
    @JoinColumn(name = "product_id")
    @MapsId
    private Product product;

    @Column(name = "disc_type")
    private String discType;

    @Column(name = "director")
    private String director;

    @Column(name = "runtime")
    private Integer runtime;

    @Column(name = "studio")
    private String studio;

    @Column(name = "language")
    private String language;

    @Column(name = "subtitles")
    private String subtitles;

    @Column(name = "release_date")
    private LocalDate releaseDate;

    @Column(name = "genre")
    private String genre;

    // Getters and Setters ...
}

