const Contact = () => {
  return (
    <div>
      <h2>Contact</h2>
      <p>Email: brianapgil@gmail.com</p>
      <p>Number: 123-456-7890</p>
      <p>Address: 44 Madison Avenue</p>
      <form action="/action_page.php">
        <div class="form-group">
          <label for="email">Name:</label>
          <input type="email" class="form-control" id="email" />
        </div>
        <div class="form-group">
          <label for="email">Email address:</label>
          <input type="email" class="form-control" id="email" />
        </div>
        <div class="form-group">
          <label for="pwd">Message:</label>
          <input type="password" class="form-control" id="pwd" />
        </div>
        <div class="checkbox">
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
    </div>
  )
}
export default Contact;