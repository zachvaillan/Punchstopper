class User < ApplicationRecord

    validates :session_token, :email, presence: true, uniqueness: true
    validates :name, :password_digest, presence: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    attr_reader :password 
    after_initialize :ensure_session_token

    has_many :projects,
        foreign_key: :owner_id,
        class_name: "Project"

    has_many :backings, 
        foreign_key: :backer_id,
        class_name: "Back"

    has_many :backed_projects, 
        through: :backings,
        source: :project

    has_one_attached :photo

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        if user && user.is_password?(password)
            user
        else 
            nil
        end
    end    

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end

end
