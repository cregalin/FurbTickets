json.extract! room, :id, :room_type, :description, :quantity_chairs
json.url room_url(room, format: :json)
