json.data @shows do |show|
  json.id show.id
  json.title show.title
  json.description show.description
  json.price show.price
  json.troupe show.troupe
  json.session_id show.session_id
  json.session_date show.session_date
  json.session_time show.session_time.strftime('%H:%M')
  json.session_room_id show.session_room_id
end
