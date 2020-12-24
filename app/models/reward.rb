class Reward < ApplicationRecord

    belongs_to :project,
        foreign_key: :project_id,
        class_name: "Project"

    has_many :backs,
        foreign_key: :reward_id,
        class_name: "Back"

end
