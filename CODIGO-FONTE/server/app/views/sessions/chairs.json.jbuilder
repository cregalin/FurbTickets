json.data @chairs do |chair|
	json.id chair.id
	json.reference chair.reference
	json.status chair.status_value == 1 && chair.ticket_id.present? ? 'ocupada' : (chair.status_value == 1 ? 'livre' : 'inativa')
end
