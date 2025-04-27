package vn.aims.bookSeller;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import vn.aims.bookSeller.Entity.Book;
import vn.aims.bookSeller.Exception.BookException;
import vn.aims.bookSeller.Repository.BookRepo;
import vn.aims.bookSeller.Service.BookService;

public class BookServiceTest {

    @Mock
    private BookRepo bookRepository;  // biến thường

    @InjectMocks
    private BookService bookService;  // biến thường

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetProductById_validId_shouldReturnProduct() {
        // Arrange
        Book book = new Book();
        book.setId(999L);
        book.setName("doremon");
        when(bookRepository.findById(999L)).thenReturn(Optional.of(book));

        // Act
        Book product = bookService.getBookById(999L);

        // Assert
        assertNotNull(product);
        assertEquals(999L, product.getId());
        assertEquals("doremon", product.getName());
    }

    @Test
    void testGetProductById_invalidId_shouldThrowProductNotFoundException() {
        when(bookRepository.findById(999L)).thenReturn(Optional.empty());

        assertThrows(BookException.class, () -> {
            bookService.getBookById(999L);
        });
    }

    @Test
    void testGetProductById_nullId_shouldThrowIllegalArgumentException() {
        assertThrows(IllegalArgumentException.class, () -> {
            bookService.getBookById(null);
        });
    }
}
