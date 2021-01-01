class Back < ApplicationRecord

    validates :backing_amount, presence: true, numericality: { greater_than: 0 }
    validates :backer_id, :reward_id, presence: true

    belongs_to :backer,
        foreign_key: :backer_id,
        class_name: "User"
    
    belongs_to :reward,
        foreign_key: :reward_id,
        class_name: "Reward",
        optional: :true

    has_one :project,
        through: :reward,
        source: :project

end
