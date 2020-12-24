class Api::RewardsController < ApplicationController


    def create
        @reward = Reward.new(reward_params)
        if @reward.save
            render :index
        else
            render json: @reward.errors.full_messages
        end
    end

    def reward_params
        params.require(:reward).permit(:min_amount, :title, :description, :deliver_date, :backer_count, :project_id)
    end

end
