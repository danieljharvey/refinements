function renderUser(user) {
    
  const userName = (user && user.name && user.name.length > 0) ? user.name : "No name"
 
  const horses = "yeah"

  return userName + horses
}
