class Show {
  constructor(title, description, price, troupe, sessions) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.troupe = troupe;
    this.sessions_attributes = sessions;
  }

  addSession(date, time) {
    this.sessions_attributes.push(new Session(date, time));
  }
}
