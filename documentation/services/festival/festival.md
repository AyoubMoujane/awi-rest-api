## **Switch current festival while removing previous one**

Returns json data about a single user.

- **URL**

  /api/festivals/switchCurrent

- **Method:**

  `PUT`

- **URL Params**

- **Data Params**
    **Required**
  previousCurrentFestival
  newCurrentFestival

- **Success Response:**

  - **Code:** 200 <br />
    **Content:** `{ message : "Festival was updated successfully." }`

- **Error Response:**

  - **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Error message" }`

  OR

  - **Code:** 403 FORBIDDEN <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`
