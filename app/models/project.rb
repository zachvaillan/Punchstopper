class Project < ApplicationRecord

    validates :description, presence: true, length: { maximum: 135 }
    validates :category, :launched, :owner_id, :location, presence: true
    validates :funding_amount, numericality: { only_integer: true }

    belongs_to :owner,
        foreign_key: :owner_id,
        class_name: "User"
    
    has_many :rewards, 
        foreign_key: :project_id,
        class_name: "Reward"

    has_many :backers,
        through: :rewards,
        source: :backs

    has_one_attached :photo

end
