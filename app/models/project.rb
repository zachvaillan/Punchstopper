class Project < ApplicationRecord

    validates :description, length: { maximum: 135 }

    belongs_to :owner,
        foreign_key: :owner_id,
        class_name: "User"
    
    has_many :rewards, 
        foreign_key: :project_id,
        class_name: "Reward"

    has_one_attached :photo

end
