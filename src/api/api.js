const baseURL = 'https://strangers-things.herokuapp.com/api/2207-FTB-ET-WEB-PT'

export const getPosts = async(token) => {
  try {
    const response = await fetch(`${baseURL}/posts`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    console.log(response, 'response');
    const results = await response.json();
    console.log (results, 'results api');
    return results;
  } catch(error) {
    console.error('error getting all posts')
  }
}


export const registerUser = async (username, password) => {
  try {
    const response = await fetch(`${baseURL}/users/register`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password
        }
      })
    })
    const result = await response.json();
    return result;
  } catch(error) {
    console.error('There was an error with registering the user, please try again.')
  }
}

export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${baseURL}/users/login`,{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username,
          password
        }
      })
    })
    
    const result = await response.json();
    
    return result;
    
  } catch(error) {
    console.error('There was an error logging in the user')
  }
}


export const getUserDetails = async (token) => {
  try {
    const response = await fetch(`${baseURL}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    })
    
    const result = await response.json();
    return result;
    
  } catch(error) {
    console.error('There was an error getting user details, please try again.')
  }
}


export const createPost = async (token, {title, description, price, location, willDeliver})=> {
  try {
    const response = await fetch(`${baseURL}/posts`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        post: {
          title,
          description,
          price,
          location,
          willDeliver
        }
      })
    })
    
    const result = await response.json();
    return result;
  } catch(error) {
    console.error('There was an error with creating a new post')
  }
}

export const deletePost = async (token, postID) => {
  console.log(postID)
  try{
    const response = await fetch(`${baseURL}/posts/${postID}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
})
    
    const data = await response.json();
    return data;
  } catch(ex) {
    console.log(error)
    console.log('error deleting post')
  }
}




export const updatePost = async ({token, title, description, price, location, willDeliver, _id})=> {
  try {
    const response = await fetch(`${baseURL}/posts/${postID}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        post: {
          title,
          description,
          price,
          location,
          willDeliver
        }
      })
    })
    
    const result = await response.json();
    return result;  
  } catch(error) {
    console.error('There was error updating post')
  }
}


export const createMessage = async ({postID, token, message}) => {
  try {
    const respons = await fetch(`${baseURL}/posts/${postID}/messages`, {
     method: 'POST',
     headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
     },
     body: JSON.stringify({
      message
     })
    })
  } catch(error) {
    console.error('There was an error creating the message')
  }
}