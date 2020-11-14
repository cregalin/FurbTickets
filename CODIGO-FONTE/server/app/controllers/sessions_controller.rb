class SessionsController < ApplicationController
	def chairs
		@chairs = Chair.select('chairs.status, chairs.id, chairs.reference, tickets.id ticket_id')
			.joins('LEFT JOIN sessions ON sessions.room_id = chairs.room_id ',
				'LEFT JOIN tickets ON tickets.session_id = sessions.id AND chairs.id = tickets.chair_id')
			.where(sessions: { id: params[:id] })
	end
end