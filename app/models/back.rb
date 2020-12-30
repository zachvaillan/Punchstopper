class Back < ApplicationRecord

    belongs_to :backer,
        foreign_key: :backer_id,
        class_name: "User"
    
    belongs_to :reward,
        foreign_key: :reward_id,
        class_name: "Reward"

    has_one :project,
        through: :reward,
        source: :project

end
