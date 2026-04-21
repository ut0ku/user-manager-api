module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    first_name: { type: DataTypes.STRING, allowNull: false },
    last_name: { type: DataTypes.STRING, allowNull: false },
    age: { type: DataTypes.INTEGER },
    created_at: { type: DataTypes.BIGINT, allowNull: false },
    updated_at: { type: DataTypes.BIGINT, allowNull: false },
  }, {
    tableName: 'users',
    timestamps: false,
    hooks: {
      beforeCreate: (user) => {
        const now = Math.floor(Date.now() / 1000);
        user.created_at = now;
        user.updated_at = now;
      },
      beforeUpdate: (user) => {
        user.updated_at = Math.floor(Date.now() / 1000);
      },
    },
  });

  return User;
};
