// ==EMEVD==
// @docs    ds3-common.emedf.json
// @compress    DarkSouls3
// @game    DarkSouls3
// @string    N:\FDP\data\Param\event\common_func.emevd       
// @linked    [0]
// ==/EMEVD==

Event(0, Default, function() {
    // Arena Steup
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25000060)
    InitializeEvent(0, 15300000, 0);
    DeactivateGenerator(5309000, Disabled);
    
    // Trial of Adversity
    SkipIfEventFlag(3, OFF, TargetEventFlagType.EventFlag, 25000060)
    SetEventFlag(25000060, OFF);
    SetMapCeremony(40, 0, 0);
    InitializeEvent(0, 15301000, 0);
    
    // Generators
    DeactivateGenerator(5309001, Disabled);
    DeactivateGenerator(5309002, Disabled);
    DeactivateGenerator(5309003, Disabled);
    DeactivateGenerator(5309004, Disabled);
    
    // Boss
    SetCharacterAnimationState(5300910, Disabled);
    ChangeCharacterEnableState(5300910, Disabled);
    
    // Companion - Setup
    InitializeCommonEvent(20080000, 5300750); // Companion 1
    InitializeCommonEvent(20080000, 5300751); // Companion 2
    InitializeCommonEvent(20080000, 5300752); // Companion 3
    InitializeCommonEvent(20080000, 5300753); // Companion 4
    InitializeCommonEvent(20080000, 5300754); // Companion 5
    InitializeCommonEvent(20080000, 5300755); // Companion 6
    InitializeCommonEvent(20080000, 5300756); // Companion 7
    InitializeCommonEvent(20080000, 5300757); // Companion 8
    InitializeCommonEvent(20080000, 5300758); // Companion 9
    InitializeCommonEvent(20080000, 5300759); // Companion 10
    InitializeCommonEvent(20080000, 5300760); // Companion 11
    InitializeCommonEvent(20080000, 5300761); // Companion 12
    InitializeCommonEvent(20080000, 5300762); // Companion 13
    InitializeCommonEvent(20080000, 5300763); // Companion 14
    InitializeCommonEvent(20080000, 5300764); // Companion 15
    InitializeCommonEvent(20080000, 5300765); // Companion 16
    InitializeCommonEvent(20080000, 5300766); // Companion 17
    InitializeCommonEvent(20080000, 5300767); // Companion 18
    InitializeCommonEvent(20080000, 5300768); // Companion 19
    InitializeCommonEvent(20080000, 5300769); // Companion 20
    
    // Companion - Tools
    InitializeCommonEvent(20080002, 5300750); // Companion 1
    InitializeCommonEvent(20080002, 5300751); // Companion 2
    InitializeCommonEvent(20080002, 5300752); // Companion 3
    InitializeCommonEvent(20080002, 5300753); // Companion 4
    InitializeCommonEvent(20080002, 5300754); // Companion 5
    InitializeCommonEvent(20080002, 5300755); // Companion 6
    InitializeCommonEvent(20080002, 5300756); // Companion 7
    InitializeCommonEvent(20080002, 5300757); // Companion 8
    InitializeCommonEvent(20080002, 5300758); // Companion 9
    InitializeCommonEvent(20080002, 5300759); // Companion 10
    InitializeCommonEvent(20080002, 5300760); // Companion 11
    InitializeCommonEvent(20080002, 5300761); // Companion 12
    InitializeCommonEvent(20080002, 5300762); // Companion 13
    InitializeCommonEvent(20080002, 5300763); // Companion 14
    InitializeCommonEvent(20080002, 5300764); // Companion 15
    InitializeCommonEvent(20080002, 5300765); // Companion 16
    InitializeCommonEvent(20080002, 5300766); // Companion 17
    InitializeCommonEvent(20080002, 5300767); // Companion 18
    InitializeCommonEvent(20080002, 5300768); // Companion 19
    InitializeCommonEvent(20080002, 5300769); // Companion 20
    
    // Companion - Activity
    InitializeCommonEvent(20080003, 5300750, 160760000); // Companion 1
    InitializeCommonEvent(20080003, 5300751, 160760001); // Companion 2
    InitializeCommonEvent(20080003, 5300752, 160760002); // Companion 3
    InitializeCommonEvent(20080003, 5300753, 160760003); // Companion 4
    InitializeCommonEvent(20080003, 5300754, 160760004); // Companion 5
    InitializeCommonEvent(20080003, 5300755, 160760005); // Companion 6
    InitializeCommonEvent(20080003, 5300756, 160760006); // Companion 7
    InitializeCommonEvent(20080003, 5300757, 160760007); // Companion 8
    InitializeCommonEvent(20080003, 5300758, 160760008); // Companion 9
    InitializeCommonEvent(20080003, 5300759, 160760009); // Companion 10
    InitializeCommonEvent(20080003, 5300760, 160760010); // Companion 11
    InitializeCommonEvent(20080003, 5300761, 160760011); // Companion 12
    InitializeCommonEvent(20080003, 5300762, 160760012); // Companion 13
    InitializeCommonEvent(20080003, 5300763, 160760013); // Companion 14
    InitializeCommonEvent(20080003, 5300764, 160760014); // Companion 15
    InitializeCommonEvent(20080003, 5300765, 160760015); // Companion 16
    InitializeCommonEvent(20080003, 5300766, 160760016); // Companion 17
    InitializeCommonEvent(20080003, 5300767, 160760017); // Companion 18
    InitializeCommonEvent(20080003, 5300768, 160760018); // Companion 19
    InitializeCommonEvent(20080003, 5300769, 160760019); // Companion 20

    // Companion - Effects
    InitializeCommonEvent(20080010, 5300750); // Companion 1
    InitializeCommonEvent(20080011, 5300751); // Companion 2
    InitializeCommonEvent(20080012, 5300752); // Companion 3
    InitializeCommonEvent(20080013, 5300753); // Companion 4
    InitializeCommonEvent(20080014, 5300754); // Companion 5
    InitializeCommonEvent(20080015, 5300755); // Companion 6
    InitializeCommonEvent(20080016, 5300756); // Companion 7
    InitializeCommonEvent(20080017, 5300757); // Companion 8
    InitializeCommonEvent(20080018, 5300758); // Companion 9
    InitializeCommonEvent(20080019, 5300759); // Companion 10
    InitializeCommonEvent(20080020, 5300760); // Companion 11
    InitializeCommonEvent(20080021, 5300761); // Companion 12
    InitializeCommonEvent(20080022, 5300762); // Companion 13
    InitializeCommonEvent(20080023, 5300763); // Companion 14
    InitializeCommonEvent(20080024, 5300764); // Companion 15
    InitializeCommonEvent(20080025, 5300765); // Companion 16
    InitializeCommonEvent(20080026, 5300766); // Companion 17
    InitializeCommonEvent(20080027, 5300767); // Companion 18
    InitializeCommonEvent(20080028, 5300768); // Companion 19
    InitializeCommonEvent(20080029, 5300769); // Companion 20
    
    // Only load when player is in map
    IfPlayerInoutMap(AND_01, true, 53, 0);
    WaitForConditionGroupState(PASS, AND_01);
    
    // Companion - Summoning
    InitializeCommonEvent(20080100, 5300750, 160760000, 160760200, 53, 0); // Companion 1
    InitializeCommonEvent(20080101, 5300751, 160760001, 160760200, 53, 0); // Companion 2
    InitializeCommonEvent(20080102, 5300752, 160760002, 160760200, 53, 0); // Companion 3
    InitializeCommonEvent(20080103, 5300753, 160760003, 160760200, 53, 0); // Companion 4
    InitializeCommonEvent(20080104, 5300754, 160760004, 160760200, 53, 0); // Companion 5
    InitializeCommonEvent(20080105, 5300755, 160760005, 160760200, 53, 0); // Companion 6
    InitializeCommonEvent(20080106, 5300756, 160760006, 160760200, 53, 0); // Companion 7
    InitializeCommonEvent(20080107, 5300757, 160760007, 160760200, 53, 0); // Companion 8
    InitializeCommonEvent(20080108, 5300758, 160760008, 160760200, 53, 0); // Companion 9
    InitializeCommonEvent(20080109, 5300759, 160760009, 160760200, 53, 0); // Companion 10
    InitializeCommonEvent(20080110, 5300760, 160760010, 160760200, 53, 0); // Companion 11
    InitializeCommonEvent(20080111, 5300761, 160760011, 160760200, 53, 0); // Companion 12
    InitializeCommonEvent(20080112, 5300762, 160760012, 160760200, 53, 0); // Companion 13
    InitializeCommonEvent(20080113, 5300763, 160760013, 160760200, 53, 0); // Companion 14
    InitializeCommonEvent(20080114, 5300764, 160760014, 160760200, 53, 0); // Companion 15
    InitializeCommonEvent(20080115, 5300765, 160760015, 160760200, 53, 0); // Companion 16
    InitializeCommonEvent(20080116, 5300766, 160760016, 160760200, 53, 0); // Companion 17
    InitializeCommonEvent(20080117, 5300767, 160760017, 160760200, 53, 0); // Companion 18
    InitializeCommonEvent(20080118, 5300768, 160760018, 160760200, 53, 0); // Companion 19
    InitializeCommonEvent(20080119, 5300769, 160760019, 160760200, 53, 0); // Companion 20
});

// Arena
Event(15300000, Default, function() {
    GotoIfHollowArenaMatchType(Label.LABEL0, HollowArenaMatchType.Duel);
    GotoIfHollowArenaMatchType(Label.LABEL1, HollowArenaMatchType.TwoPlayerBrawl);
    GotoIfHollowArenaMatchType(Label.LABEL2, HollowArenaMatchType.FourPlayerBrawl);
    GotoIfHollowArenaMatchType(Label.LABEL3, HollowArenaMatchType.SixPlayerBrawl);
    GotoIfHollowArenaMatchType(Label.LABEL4, HollowArenaMatchType.TwoVersusThree);
    GotoIfHollowArenaMatchType(Label.LABEL5, HollowArenaMatchType.ThreeVersusThree);
    Label0();
    InitializeCommonEvent(20005920, 0, 15305300, 10020000, 10020010);
    InitializeCommonEvent(20005930, 15305300);
    InitializeCommonEvent(20005941, 15305300);
    EndUnconditionally(EventEndType.End);
    Label1();
    InitializeCommonEvent(20005920, 1, 15305300, 10020001, 10020011);
    GotoUnconditionally(Label.LABEL9);
    Label2();
    InitializeCommonEvent(20005920, 2, 15305300, 10020002, 10020012);
    GotoUnconditionally(Label.LABEL9);
    Label3();
    InitializeCommonEvent(20005920, 3, 15305300, 10020003, 10020013);
    GotoUnconditionally(Label.LABEL9);
    Label4();
    InitializeCommonEvent(20005920, 4, 15305300, 10020004, 10020014);
    GotoUnconditionally(Label.LABEL9);
    Label5();
    InitializeCommonEvent(20005920, 5, 15305300, 10020005, 10020015);
    GotoUnconditionally(Label.LABEL9);
    Label9();
    InitializeCommonEvent(20005940, 15305300);
});

// Trial
Event(15301000, Default, function() {
    InitializeEvent(0, 15301010, 0); // Trial
    InitializeEvent(0, 15301020, 0); // Setup Wave Entity
    InitializeEvent(0, 15301030, 0); // Setup Wave Damage
    InitializeEvent(0, 15301040, 0); // Setup Enemy Effects
});

// Trial
Event(15301010, Default, function() {
    WaitFixedTimeSeconds(5.0);
    
    // Wave 1 - Dogs Amok
    InitializeEvent(0, 15301011, 5309001, 260200100, 205000); 

    IfCharacterHPRatio(MAIN, 5300900, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    AwardItemsIncludingClients(800500000);
    
    WaitFixedTimeSeconds(10.0);
    
    // Wave 2 - The Bone Gang
    InitializeEvent(0, 15301011, 5309002, 260200101, 205001); 

    IfCharacterHPRatio(MAIN, 5300900, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    AwardItemsIncludingClients(800500010);
    
    WaitFixedTimeSeconds(10.0);
    
    // Wave 3 - Rock'n'Roll
    InitializeEvent(0, 15301011, 5309003, 260200102, 205002); 

    IfCharacterHPRatio(MAIN, 5300900, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    AwardItemsIncludingClients(800500020);
    
    WaitFixedTimeSeconds(10.0);
    
    // Wave 4 - Serpentine Swarm
    InitializeEvent(0, 15301011, 5309004, 260200103, 205003); 

    IfCharacterHPRatio(MAIN, 5300900, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    AwardItemsIncludingClients(800500030);
    
    WaitFixedTimeSeconds(10.0);
    
    // Boss - The Dragon Knight
    InitializeEvent(0, 15301012, 5300910, 260200104, 205004); 
    
    IfCharacterHPRatio(MAIN, 5300910, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    AwardItemsIncludingClients(800500040);
    
    WaitFixedTimeSeconds(10.0);
    
    // Return
    WarpPlayer(40, 0, 4000970);
});

// Wave State - Wave
Event(15301011, Default, function(X0_4, X4_4, X8_4) {
    SetSpeffect(5300900, X4_4);
    DisplayBossHealthBar(Enabled, 5300900, 0, X8_4);
    DeactivateGenerator(X0_4, Enabled);
    
    IfCharacterHPRatio(MAIN, 5300900, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    
    DisplayBossHealthBar(Disabled, 5300900, 0, 905290);
    DeactivateGenerator(X0_4, Disabled);
    
    WaitFixedTimeSeconds(5.0);
});

// Wave State - Boss
Event(15301012, Default, function(X0_4, X4_4, X8_4) {
    SetSpeffect(5300900, X4_4);
    DisplayBossHealthBar(Enabled, 5300900, 0, X8_4);
    
    SetCharacterAnimationState(X0_4, Enabled);
    ChangeCharacterEnableState(X0_4, Enabled);
    SpawnOneshotSFX(TargetEntityType.Character, X0_4, 280, 1060);
    
    IfCharacterHPRatio(MAIN, X0_4, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    
    DisplayBossHealthBar(Disabled, X0_4, 0, 905290);
    
    WaitFixedTimeSeconds(5.0);
});

// Setup Wave Entity
Event(15301020, Default, function() {
    SetCharacterAIState(5300900, Disabled);
    SetCharacterGravity(5300900, Disabled);
    SetCharacterAnimationState(5300900, Disabled);
    SetLockOnPoint(5300900, 220, Disabled);
    
    EndUnconditionally(EventEndType.Restart);
});

// Setup Wave Damage
Event(15301030, Default, function() {
    // Setup mechanics
    SkipIfCharacterHasSpeffect(3, 5305761, 260200010, true, ComparisonType.Equal, 1);
    CreateReferredDamagePair(5305761, 5300900); // Tie HP to Wave HP
    SetCharacterAIState(5305761, Enabled); // Enable AI
    SetSpeffect(5305761, 260200010);
    
    // Kill enemy if Wave is over
    IfCharacterHPRatio(AND_01, 5300900, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    SkipIfConditionGroupStateUncompiled(1, FAIL, AND_01);
    SetSpeffect(5305761, 260200002);

    EndUnconditionally(EventEndType.Restart);
});

// Setup Enemy Effects
Event(15301040, Default, function() {
    // Curses
    InitializeCommonEvent(20081010, 5305761, 250001020, 25000400); // Curse of Pride - 10%
    InitializeCommonEvent(20081010, 5305761, 250001021, 25000401); // Curse of Pride - 20%
    InitializeCommonEvent(20081010, 5305761, 250001022, 25000402); // Curse of Pride - 30%
    InitializeCommonEvent(20081010, 5305761, 250001023, 25000403); // Curse of Pride - 40%
    InitializeCommonEvent(20081010, 5305761, 250001024, 25000404); // Curse of Pride - 50%
    InitializeCommonEvent(20081010, 5305761, 250001025, 25000405); // Curse of Pride - 60%
    InitializeCommonEvent(20081010, 5305761, 250001026, 25000406); // Curse of Pride - 70%
    InitializeCommonEvent(20081010, 5305761, 250001027, 25000407); // Curse of Pride - 80%
    InitializeCommonEvent(20081010, 5305761, 250001028, 25000408); // Curse of Pride - 90%
    InitializeCommonEvent(20081010, 5305761, 250001029, 25000409); // Curse of Pride - 100%

    InitializeCommonEvent(20081010, 5305761, 250001120, 25000410); // Curse of Fortitude - 5%
    InitializeCommonEvent(20081010, 5305761, 250001121, 25000411); // Curse of Fortitude - 10%
    InitializeCommonEvent(20081010, 5305761, 250001122, 25000412); // Curse of Fortitude - 15%
    InitializeCommonEvent(20081010, 5305761, 250001123, 25000413); // Curse of Fortitude - 20%
    InitializeCommonEvent(20081010, 5305761, 250001124, 25000414); // Curse of Fortitude - 25%
    InitializeCommonEvent(20081010, 5305761, 250001125, 25000415); // Curse of Fortitude - 30%
    InitializeCommonEvent(20081010, 5305761, 250001126, 25000416); // Curse of Fortitude - 35%
    InitializeCommonEvent(20081010, 5305761, 250001127, 25000417); // Curse of Fortitude - 40%
    InitializeCommonEvent(20081010, 5305761, 250001128, 25000418); // Curse of Fortitude - 45%
    InitializeCommonEvent(20081010, 5305761, 250001129, 25000419); // Curse of Fortitude - 50%
    
    InitializeCommonEvent(20081010, 5305761, 250001320, 25000420); // Curse of Vitality - 10
    InitializeCommonEvent(20081010, 5305761, 250001321, 25000421); // Curse of Vitality - 20
    InitializeCommonEvent(20081010, 5305761, 250001322, 25000422); // Curse of Vitality - 30
    InitializeCommonEvent(20081010, 5305761, 250001323, 25000423); // Curse of Vitality - 40
    InitializeCommonEvent(20081010, 5305761, 250001324, 25000424); // Curse of Vitality - 50
    InitializeCommonEvent(20081010, 5305761, 250001325, 25000425); // Curse of Vitality - 60
    InitializeCommonEvent(20081010, 5305761, 250001326, 25000426); // Curse of Vitality - 70
    InitializeCommonEvent(20081010, 5305761, 250001327, 25000427); // Curse of Vitality - 80
    InitializeCommonEvent(20081010, 5305761, 250001328, 25000428); // Curse of Vitality - 90
    InitializeCommonEvent(20081010, 5305761, 250001329, 25000429); // Curse of Vitality - 100
    
    InitializeCommonEvent(20081010, 5305761, 250001420, 25000430); // Curse of Wrath - 10
    InitializeCommonEvent(20081010, 5305761, 250001421, 25000431); // Curse of Wrath - 20
    InitializeCommonEvent(20081010, 5305761, 250001422, 25000432); // Curse of Wrath - 30
    InitializeCommonEvent(20081010, 5305761, 250001423, 25000433); // Curse of Wrath - 40
    InitializeCommonEvent(20081010, 5305761, 250001424, 25000434); // Curse of Wrath - 50
    InitializeCommonEvent(20081010, 5305761, 250001425, 25000435); // Curse of Wrath - 60
    InitializeCommonEvent(20081010, 5305761, 250001426, 25000436); // Curse of Wrath - 70
    InitializeCommonEvent(20081010, 5305761, 250001427, 25000437); // Curse of Wrath - 80
    InitializeCommonEvent(20081010, 5305761, 250001428, 25000438); // Curse of Wrath - 90
    InitializeCommonEvent(20081010, 5305761, 250001429, 25000439); // Curse of Wrath - 100
    
    InitializeCommonEvent(20081000, 5305750, 25000440);             // Curse of Attraction
    InitializeCommonEvent(20081010, 5305761, 250001920, 25000480);  // Curse of Frailty
    InitializeCommonEvent(20081010, 5305770, 250002220, 25000510);  // Curse of Valor
    
    // Warp Monitor
    InitializeCommonEvent(20090200, 5305761);
    
    SetSpeffect(5305761, 260200190); // General Scaling

    EndUnconditionally(EventEndType.Restart);
});
