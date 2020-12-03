class ShowsController < ApplicationController
  def index
    @shows = Show
      .select('shows.id, shows.title, shows.description, shows.price, sessions.room_id session_room_id, shows.troupe')
      .joins(:sessions)
      .group("shows.id")
      .by_title(params[:title])
      .by_description(params[:description])
      .by_troupe(params[:troupe])
      .by_session_time(params[:time_from], params[:time_to])
      .by_session_date(params[:date_from], params[:date_to])

    render "shows/index.json"
  end

  def show
    @show = Show.joins(:sessions).find(params[:id])

    render json: { show: @show, sessions_attributes: @show.sessions.map { |session| {id: session.id, show_id: session.show_id, date: session.date, time: session.time, room_id: session.room_id, room_description: session&.room&.description } } }
  end

  def create
    @show = Show.new(show_params)

    if @show.save
      render json: @show, status: :created, location: @show
    else
      render json: @show.errors, status: :unprocessable_entity
    end
  end

  def update
    @show = Show.find(params[:id])

    if @show.update(show_params)
      render json: @show
    else
      render json: @show.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @show = Show.joins(:sessions).find(params[:id])

    @show.destroy
  end

  private
    def show_params
      params.require(:show).permit(:title, :description, :price, :troupe, sessions_attributes: [:room_id, :date, :time, :id, :destroy])
    end
end
