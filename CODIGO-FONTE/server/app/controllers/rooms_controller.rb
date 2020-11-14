class RoomsController < ApplicationController
  before_action :set_room, only: [:show, :update, :destroy]

  def index
    @rooms = Room.all
  end

  def show
  end

  def create
    @room = Room.new(room_params.merge({ chairs_attributes: JSON.parse(File.read("#{ Rails.public_path }/chairs.json"))}))

    if @room.save
      render :show, status: :created, location: @room
    else
      render json: @room.errors, status: :unprocessable_entity
    end
  end

  def update
    if @room.update(room_params)
      render :show, status: :ok, location: @room
    else
      render json: @room.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @room.destroy
  end

  private
    def set_room
      @room = Room.find(params[:id])
    end

    def room_params
      params.require(:room).permit(:room_type, :description, :quantity_chairs)
    end
end
