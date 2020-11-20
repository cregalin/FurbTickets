class Customer < ApplicationRecord
	validates :email, :cpf, presence: true

	has_many :tickets
end
