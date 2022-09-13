class Movie {
    constructor(title, genre, rating) {
        this.title = title;
        this.genre = genre;
        this.rating = rating;

    }

}

class UI {

    addMovieToList(movie) {

        const list = document.getElementById('movie-list');
        const row = document.createElement('tr');
        row.innerHTML = `
            
            <td>${movie.title}</td>
            <td>${movie.genre}</td>
            <td>${movie.rating}</td>
            <td><a href="" class="delete">X</a></td>
            `;
        list.appendChild(row);


    }

    showAlert(message, className) {

        const div = document.createElement('div');

        //Adding className

        div.className = `alert ${className}`;

        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.container');

        //Getting Form

        const form = document.querySelector('#movie-form');

        //Inserting alert

        container.insertBefore(div, form);


        setTimeout(function () {

            document.querySelector('.alert').remove();
        }, 3000);


    }
    deleteMovie(target) {

        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();

        }
    }

    clearFields() {

        document.getElementById('title').value = '';
        document.getElementById('genre').value = '';
        document.getElementById('rating').value = '';

    }

}


document.getElementById('movie-form').addEventListener('submit', function (e) {

    //Get form values

    const title = document.getElementById('title').value;
    const genre = document.getElementById('genre').value;
    const rating = document.getElementById('rating').value;

    //Instantiate movie
    const movie = new Movie(title, genre, rating);

    //Instantiate UI
    const ui = new UI();

    //Validate
    if (title === '' || genre === '' || rating === '') {

        //Error alert

        ui.showAlert('please fill in all fields', 'error');
    }
    else {


        ui.addMovieToList(movie);

        ui.showAlert('Movie Added', 'success');

        ui.clearFields();

    }

    e.preventDefault();
})

//Event listening for delete 
document.getElementById('movie-list').addEventListener('click', function (e) {

    //Instantiate UI
    const ui = new UI();

    ui.deleteMovie(e.target);

    ui.showAlert('Movie Removed!', 'success');

    e.preventDefault();
});