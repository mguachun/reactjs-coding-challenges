import React from "react"

function Users () {
    const users = [
        { name: "John Doe", id: 1 },
        { name: "Jane Doe", id: 2 },
        { name: "Billy Doe", id: 3 }
      ];

      const listUsers = users.map(
          (users) => {
              return (
                  <ul>
                    <div>{users.name}
                    <div>{users.id}</div>
                    </div>
                  </ul>
              )
          }
      )
    return(
        <div>
        <h3>User names</h3>

       <ul> {listUsers}</ul>

        </div>
  
    )

}

export default Users;