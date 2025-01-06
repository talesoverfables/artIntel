import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

# Load the dataset
df = pd.read_csv('customer_preference.csv')

# Display first few rows of the dataset
print("Dataset Preview:")
print(df.head())

# Summary of the dataset
print("\nDataset Summary:")
print(df.info())

# Statistical overview
print("\nStatistical Summary:")
print(df.describe())

# Check for missing values
print("\nMissing Values:")
print(df.isnull().sum())

# Unique values in categorical columns
categorical_columns = ['Location', 'Style Preference', 'Medium Preference', 'Feedback Sentiment']
for col in categorical_columns:
    print(f"\nUnique values in {col}:")
    print(df[col].unique())

# Correlation heatmap
plt.figure(figsize=(12, 8))
sns.heatmap(df.corr(), annot=True, cmap='coolwarm', fmt=".2f")
plt.title('Correlation Heatmap', fontsize=16)
plt.show()

# Distribution of Age
plt.figure(figsize=(10, 6))
sns.histplot(df['Age'], kde=True, bins=20, color='skyblue')
plt.title('Age Distribution', fontsize=16)
plt.xlabel('Age', fontsize=12)
plt.ylabel('Frequency', fontsize=12)
plt.show()

# Average spend per buyer
plt.figure(figsize=(10, 6))
sns.boxplot(x=df['Avg Spend'], color='orange')
plt.title('Average Spend per Buyer', fontsize=16)
plt.xlabel('Average Spend', fontsize=12)
plt.show()

# Preference distribution (Paintings, Sculptures, Photographs)
plt.figure(figsize=(10, 6))
df[['Painting Preference (%)', 'Sculpture Preference (%)', 'Photograph Preference (%)']].mean().plot(kind='bar', color=['red', 'green', 'blue'])
plt.title('Average Art Category Preferences', fontsize=16)
plt.ylabel('Preference (%)', fontsize=12)
plt.xticks(rotation=0)
plt.show()

# Scatter plot: Views vs Likes
plt.figure(figsize=(10, 6))
sns.scatterplot(data=df, x='Views', y='Likes', hue='Style Preference', palette='viridis', alpha=0.7)
plt.title('Views vs Likes by Style Preference', fontsize=16)
plt.xlabel('Views', fontsize=12)
plt.ylabel('Likes', fontsize=12)
plt.legend(title='Style Preference')
plt.show()

# Feedback Sentiment Distribution
plt.figure(figsize=(8, 5))
sns.countplot(data=df, x='Feedback Sentiment', palette='pastel')
plt.title('Feedback Sentiment Distribution', fontsize=16)
plt.xlabel('Feedback Sentiment', fontsize=12)
plt.ylabel('Count', fontsize=12)
plt.show()

# Average spend by medium preference
plt.figure(figsize=(12, 6))
sns.barplot(data=df, x='Medium Preference', y='Avg Spend', palette='muted')
plt.title('Average Spend by Medium Preference', fontsize=16)
plt.xlabel('Medium Preference', fontsize=12)
plt.ylabel('Average Spend', fontsize=12)
plt.xticks(rotation=45)
plt.show()

# Pairplot for numerical features
numerical_features = ['Age', 'Painting Preference (%)', 'Sculpture Preference (%)', 
                      'Photograph Preference (%)', 'Avg Spend', 'Views', 'Likes', 'Repeat Purchases']
sns.pairplot(df[numerical_features], diag_kind='kde', palette='coolwarm')
plt.suptitle('Pairplot of Numerical Features', y=1.02, fontsize=16)
plt.show()

# Repeat purchases vs age
plt.figure(figsize=(10, 6))
sns.lineplot(data=df, x='Age', y='Repeat Purchases', color='purple')
plt.title('Repeat Purchases vs Age', fontsize=16)
plt.xlabel('Age', fontsize=12)
plt.ylabel('Repeat Purchases', fontsize=12)
plt.show()

# EDA: Average Views by Location
plt.figure(figsize=(12, 6))
sns.barplot(data=df.groupby('Location')['Views'].mean().reset_index(), x='Location', y='Views', palette='coolwarm')
plt.title('Average Views by Location', fontsize=16)
plt.xlabel('Location', fontsize=12)
plt.ylabel('Average Views', fontsize=12)
plt.xticks(rotation=45)
plt.show()
