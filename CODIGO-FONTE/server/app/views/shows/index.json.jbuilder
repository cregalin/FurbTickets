json.data @shows do |show|
  json.id show.id
  json.title show.title
  json.description show.description
  json.price show.price
  json.troupe show.troupe
  json.session_attributes show.sessions do |session|
    json.id session.id
    json.date session.date
    json.time session.time
  end
end
