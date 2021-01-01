class Reward < ApplicationRecord

    validates :min_amount, :title, :description, :deliver_date, :backer_count, :project_id, presence: true
    validates :backer_count, numericality: { only_integer: true }

    belongs_to :project,
        foreign_key: :project_id,
        class_name: "Project"

    has_many :backs,
        foreign_key: :reward_id,
        class_name: "Back"

end
