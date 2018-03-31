class ApplicationController < ActionController::API

  private

    def issue_token payload
      JWT.encode(payload, Rails.application.secrets.secret_key_base, "HS256")
    end

    def authorize_user!
      if !current_user.present?
        render json: {error: 'No user id present'}
      end
    end

    def current_user
      !!@current_user ||= User.find_by(id: decoded_token.first['id'])
    end

    def find_current_user
      @current_user ||= User.find_by(id: decoded_token.first['id'])
    end

    def decoded_token
      if request.headers['Authorization']
        begin
          JWT.decode(request.headers['Authorization'], Rails.application.secrets.secret_key_base, true, {algorithm: "HS256"})
        rescue JWT::DecodeError
          return [{}]
        end
      else
        [{}]
      end
    end

end
