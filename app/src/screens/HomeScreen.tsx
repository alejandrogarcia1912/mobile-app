import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';

type HomeScreenProps = {
  username?: string;
};

const HomeScreen = ({ username }: HomeScreenProps) => {

  const displayName = username || 'Alejandro';
  const profileInitial = displayName.charAt(0).toUpperCase();

  return (

    <SafeAreaView style={styles.container}>

      <StatusBar barStyle="light-content" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >

        {/* HEADER */}

        <View style={styles.header}>

          <View>

            <Text style={styles.welcome}>
              Welcome Back
            </Text>

            <Text style={styles.username}>
              {displayName} 👋
            </Text>

          </View>

          <View style={styles.profileCircle}>
            <Text style={styles.profileText}>
              {profileInitial}
            </Text>
          </View>

        </View>

        {/* BALANCE CARD */}

        <View style={styles.balanceCard}>

          <Text style={styles.balanceLabel}>
            Total Balance
          </Text>

          <Text style={styles.balance}>
            $ 12,450.00
          </Text>

          <View style={styles.cardBottom}>

            <View>

              <Text style={styles.cardSmallText}>
                Card Number
              </Text>

              <Text style={styles.cardValue}>
                **** 4582
              </Text>

            </View>

            <View>

              <Text style={styles.cardSmallText}>
                Exp Date
              </Text>

              <Text style={styles.cardValue}>
                09/29
              </Text>

            </View>

          </View>

        </View>

        {/* QUICK ACTIONS */}

        <Text style={styles.sectionTitle}>
          Quick Actions
        </Text>

        <View style={styles.actionsContainer}>

          <TouchableOpacity style={styles.actionCard}>

            <Text style={styles.actionEmoji}>
              💸
            </Text>

            <Text style={styles.actionText}>
              Transfer
            </Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard}>

            <Text style={styles.actionEmoji}>
              💳
            </Text>

            <Text style={styles.actionText}>
              Pay Bills
            </Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard}>

            <Text style={styles.actionEmoji}>
              📈
            </Text>

            <Text style={styles.actionText}>
              Investments
            </Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard}>

            <Text style={styles.actionEmoji}>
              🏦
            </Text>

            <Text style={styles.actionText}>
              Accounts
            </Text>

          </TouchableOpacity>

        </View>

        {/* TRANSACTIONS */}

        <Text style={styles.sectionTitle}>
          Recent Transactions
        </Text>

        <View style={styles.transactionCard}>

          <View>

            <Text style={styles.transactionTitle}>
              Netflix
            </Text>

            <Text style={styles.transactionDate}>
              Today
            </Text>

          </View>

          <Text style={styles.transactionAmount}>
            - $15
          </Text>

        </View>

        <View style={styles.transactionCard}>

          <View>

            <Text style={styles.transactionTitle}>
              Salary
            </Text>

            <Text style={styles.transactionDate}>
              Yesterday
            </Text>

          </View>

          <Text style={styles.incomeAmount}>
            + $3,200
          </Text>

        </View>

        <View style={styles.transactionCard}>

          <View>

            <Text style={styles.transactionTitle}>
              Spotify
            </Text>

            <Text style={styles.transactionDate}>
              2 days ago
            </Text>

          </View>

          <Text style={styles.transactionAmount}>
            - $10
          </Text>

        </View>

      </ScrollView>

    </SafeAreaView>

  );

};

export default HomeScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#000000',
  },

  scrollContainer: {
    padding: 25,
    paddingBottom: 50,
  },

  header: {
    marginTop: 20,
    marginBottom: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  welcome: {
    color: '#A1A1AA',
    fontSize: 15,
  },

  username: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 5,
  },

  profileCircle: {
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: '#D946EF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },

  balanceCard: {
    backgroundColor: '#D946EF',
    borderRadius: 28,
    padding: 28,
    marginBottom: 35,
  },

  balanceLabel: {
    color: '#FCE7F3',
    fontSize: 15,
  },

  balance: {
    color: '#FFFFFF',
    fontSize: 38,
    fontWeight: 'bold',
    marginTop: 10,
  },

  cardBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 35,
  },

  cardSmallText: {
    color: '#FCE7F3',
    fontSize: 13,
  },

  cardValue: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 5,
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  actionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 35,
  },

  actionCard: {
    width: '47%',
    backgroundColor: '#111111',
    borderWidth: 1,
    borderColor: '#27272A',
    borderRadius: 22,
    paddingVertical: 28,
    alignItems: 'center',
    marginBottom: 18,
  },

  actionEmoji: {
    fontSize: 32,
    marginBottom: 12,
  },

  actionText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },

  transactionCard: {
    backgroundColor: '#111111',
    borderWidth: 1,
    borderColor: '#27272A',
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  transactionTitle: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
  },

  transactionDate: {
    color: '#A1A1AA',
    marginTop: 5,
  },

  transactionAmount: {
    color: '#EF4444',
    fontSize: 18,
    fontWeight: 'bold',
  },

  incomeAmount: {
    color: '#22C55E',
    fontSize: 18,
    fontWeight: 'bold',
  },

});