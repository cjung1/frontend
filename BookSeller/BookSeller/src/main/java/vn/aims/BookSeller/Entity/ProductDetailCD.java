package vn.aims.BookSeller.Entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Data
@Table(name = "product_detail_cd")
public class ProductDetailCD {

    @Id
    @Column(name = "product_id")
    private Integer productId;

    @OneToOne
    @JoinColumn(name = "product_id")
    @MapsId
    private Product product;

    @Column(name = "artists")
    private String artists;

    @Column(name = "record_label")
    private String recordLabel;

    @Column(name = "tracklist")
    private String tracklist;

    @Column(name = "genre")
    private String genre;

    @Column(name = "release_date")
    private LocalDate releaseDate;



    // Getters and Setters ...
}

