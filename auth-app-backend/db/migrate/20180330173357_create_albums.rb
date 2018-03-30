class CreateAlbums < ActiveRecord::Migration[5.1]
  def change
    create_table :albums do |t|
      t.belongs_to :artist, foreign_key: true
      t.string :name
      t.string :image_link

      t.timestamps
    end
  end
end
