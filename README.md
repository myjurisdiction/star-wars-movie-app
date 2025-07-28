## 1. React and Redux Toolkit

React was selected as it simplifies the creation of interactive user interfaces using a component-based structure. Redux Toolkit was employed for global state management and API calls in a clean and predictable manner. It minimizes boilerplate and makes Redux easier to use with integrated tools such as `createAsyncThunk`.

---

## 2. Project Structure Organization

The code is split into folders like `/components` for UI elements and `/redux` for all the state management logic. This structure keeps the code clean and makes it easier to scale or maintain later.

---

## 3. Using React Router for Navigation

React Router was used to handle navigation between the movie list and the movie details view. This helps keep the URL meaningful (for example, `/movie/1`) and separates concerns between pages.

---

## 4. Showing a Table with Sortable Columns

The list of movies is displayed in a table with two sortable columns: title and release date. Sorting order is changed by clicking on the column headers. This facilitates users to browse the list in various ways.

---

## 5. Dealing with Details View with Index

Because the API doesn't give us a distinct ID for each of the movies, we utilized the array index as the identifier within the URL. It is an easy and efficient means of getting the proper movie when the user clicks on a given one.

---

## 6. Simple and Readable Details View

The film details page displays crucial information such as the title, director, and opening crawl. A back button is included so that the user can easily go back to the list. It is kept clean and readable.

---

## 7. Loading and Error Handling

Simple loading and error messages are displayed while retrieving data. This provides feedback to users when data is being retrieved or if something goes incorrect.

---

## 8. Keeping the UI Minimal

No UI libraries were included from the outside. Just basic HTML elements were employed to make everything simple and easy to read. That way, it is also simple for someone else to add styling or redesign if necessary.

---

## Summary

The intention was to create a simple and usable application that fulfills all the demands. The emphasis was on clean structure, tidy code, and proper separation of concerns between data management and UI.

---

## How to Run This Project

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/star-wars-movies.git
   cd star-wars-movies
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start the Development Server**

   ```bash
   npm start
   ```

4. Open your browser and go to [http://localhost:3000](http://localhost:3000) to view the app.

---

