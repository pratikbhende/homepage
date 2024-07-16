$(document).ready(function() {
    // Contact Us button click handler
    $('#contactUsButton').on('click', function() {
        $('#contactModal').modal('show');
    });

    // Form submission handler
    $('#contactForm').on('submit', function(event) {
        event.preventDefault();
        $.ajax({
            url: $(this).attr('action'),
            method: $(this).attr('method'),
            data: $(this).serialize(),
            success: function(response) {
                alert('Form submitted successfully!');
                $('#contactModal').modal('hide');
            },
            error: function(error) {
                alert('Error submitting form');
            }
        });
    });

    // Initialize slider for 'What we do' section
    $('.carousel').carousel({
        interval: 3000
    });

    // Highlight effect on hover for cards
    $('.card').hover(function() {
        $(this).toggleClass('highlight');
    });
});
