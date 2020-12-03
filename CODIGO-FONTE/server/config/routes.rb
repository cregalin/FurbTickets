Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :shows
  resources :rooms
  resources :tickets
  get 'sessions(/:id)/chairs', to: 'sessions#chairs'
  get 'tickets(/:code)/validate', to: 'tickets#validate'
  post 'tickets/confirm', to: 'tickets#confirm'
end
