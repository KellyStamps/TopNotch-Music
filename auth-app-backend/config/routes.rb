Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :users
      resources :artists
      resources :albums
      resources :favorites
      post "/auth", to: "auth#create"
      get "current_user", to: "auth#show"
    end
  end


end

# http://localhost:3000/knock/auth_token
