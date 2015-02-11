class AddMoodToPicture < ActiveRecord::Migration
  def change
    add_column :pictures, :mood, :string
  end
end
