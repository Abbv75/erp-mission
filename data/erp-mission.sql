-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : dim. 29 déc. 2024 à 17:47
-- Version du serveur : 8.0.40-0ubuntu0.22.04.1
-- Version de PHP : 8.1.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `erp-mission`
--

-- --------------------------------------------------------

--
-- Structure de la table `demandeReparation`
--

CREATE TABLE `demandeReparation` (
  `id_demandeReparation` int NOT NULL,
  `statut` varchar(30) COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'en cours',
  `id_voiture` int NOT NULL,
  `date_reparation` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `mission`
--

CREATE TABLE `mission` (
  `id_mission` int NOT NULL,
  `date_depart` date NOT NULL,
  `date_arrivee` date NOT NULL,
  `kilometrage` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `mission`
--

INSERT INTO `mission` (`id_mission`, `date_depart`, `date_arrivee`, `kilometrage`) VALUES
(1, '2024-12-10', '2024-12-26', 541278),
(4, '2024-12-14', '2024-12-01', 858),
(6, '2024-12-29', '2024-12-30', 45);

-- --------------------------------------------------------

--
-- Structure de la table `missionParticipant`
--

CREATE TABLE `missionParticipant` (
  `id_missionParticipant` int NOT NULL,
  `id_mission` int NOT NULL,
  `id_participant` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `missionParticipant`
--

INSERT INTO `missionParticipant` (`id_missionParticipant`, `id_mission`, `id_participant`) VALUES
(4, 1, 1),
(6, 6, 1),
(7, 1, 8);

-- --------------------------------------------------------

--
-- Structure de la table `missionVehicule`
--

CREATE TABLE `missionVehicule` (
  `idMissionVehicule` int NOT NULL,
  `id_mission` int NOT NULL,
  `id_vehicule` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `missionVehicule`
--

INSERT INTO `missionVehicule` (`idMissionVehicule`, `id_mission`, `id_vehicule`) VALUES
(4, 6, 4),
(5, 1, 4);

-- --------------------------------------------------------

--
-- Structure de la table `role`
--

CREATE TABLE `role` (
  `idRole` int NOT NULL,
  `nomRole` varchar(20) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `role`
--

INSERT INTO `role` (`idRole`, `nomRole`) VALUES
(1, 'administrateur'),
(2, 'chauffeur'),
(3, 'gestionnaire');

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

CREATE TABLE `utilisateur` (
  `id_utilisateur` int NOT NULL,
  `nom_utilisateur` varchar(30) COLLATE utf8mb4_general_ci NOT NULL,
  `prenom_utilisateur` varchar(30) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `login` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `password` int NOT NULL,
  `id_role` int NOT NULL,
  `telephone` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`id_utilisateur`, `nom_utilisateur`, `prenom_utilisateur`, `login`, `password`, `id_role`, `telephone`) VALUES
(1, 'Bore', 'younouss', 'admin', 123456, 1, '66035300'),
(2, 'Toure', 'Checik', '12', 12, 2, 'dfb'),
(4, 'Bore', 'dvb', '654', 78, 1, 'bdbfnv'),
(6, 'iom', 'ijmkl', '123456', 123, 2, '45'),
(7, 'jon', 'onj', 'okok', 123, 2, 'jnk'),
(8, 'Coulibaly', 'Zeynab', 'zeynab', 123, 3, '78560633');

-- --------------------------------------------------------

--
-- Structure de la table `vehicule`
--

CREATE TABLE `vehicule` (
  `id_vehicule` int NOT NULL,
  `matricule` varchar(10) COLLATE utf8mb4_general_ci NOT NULL,
  `date_achat` date NOT NULL,
  `type` varchar(30) COLLATE utf8mb4_general_ci NOT NULL,
  `marque` varchar(30) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `vehicule`
--

INSERT INTO `vehicule` (`id_vehicule`, `matricule`, `date_achat`, `type`, `marque`) VALUES
(3, 'hdbg', '2024-12-15', 'Voiture', 'Toyota'),
(4, 'md-8654-cd', '2024-12-28', 'Voiture', 'Toyota'),
(5, 'BC-6461-MD', '2024-12-07', 'Voiture', 'Mercedes'),
(6, 'DA-7856-CD', '2023-09-25', 'Voiture', 'Toyota');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `demandeReparation`
--
ALTER TABLE `demandeReparation`
  ADD PRIMARY KEY (`id_demandeReparation`),
  ADD KEY `id_voiture` (`id_voiture`);

--
-- Index pour la table `mission`
--
ALTER TABLE `mission`
  ADD PRIMARY KEY (`id_mission`);

--
-- Index pour la table `missionParticipant`
--
ALTER TABLE `missionParticipant`
  ADD PRIMARY KEY (`id_missionParticipant`),
  ADD KEY `id_mission` (`id_mission`),
  ADD KEY `id_participant` (`id_participant`);

--
-- Index pour la table `missionVehicule`
--
ALTER TABLE `missionVehicule`
  ADD PRIMARY KEY (`idMissionVehicule`),
  ADD KEY `id_mission` (`id_mission`),
  ADD KEY `id_vehicule` (`id_vehicule`);

--
-- Index pour la table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`idRole`);

--
-- Index pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD PRIMARY KEY (`id_utilisateur`),
  ADD KEY `id_role` (`id_role`);

--
-- Index pour la table `vehicule`
--
ALTER TABLE `vehicule`
  ADD PRIMARY KEY (`id_vehicule`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `demandeReparation`
--
ALTER TABLE `demandeReparation`
  MODIFY `id_demandeReparation` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `mission`
--
ALTER TABLE `mission`
  MODIFY `id_mission` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `missionParticipant`
--
ALTER TABLE `missionParticipant`
  MODIFY `id_missionParticipant` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `missionVehicule`
--
ALTER TABLE `missionVehicule`
  MODIFY `idMissionVehicule` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `role`
--
ALTER TABLE `role`
  MODIFY `idRole` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  MODIFY `id_utilisateur` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `vehicule`
--
ALTER TABLE `vehicule`
  MODIFY `id_vehicule` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `demandeReparation`
--
ALTER TABLE `demandeReparation`
  ADD CONSTRAINT `demandeReparation_ibfk_1` FOREIGN KEY (`id_voiture`) REFERENCES `vehicule` (`id_vehicule`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `missionParticipant`
--
ALTER TABLE `missionParticipant`
  ADD CONSTRAINT `missionParticipant_ibfk_1` FOREIGN KEY (`id_mission`) REFERENCES `mission` (`id_mission`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `missionParticipant_ibfk_2` FOREIGN KEY (`id_participant`) REFERENCES `utilisateur` (`id_utilisateur`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `missionVehicule`
--
ALTER TABLE `missionVehicule`
  ADD CONSTRAINT `missionVehicule_ibfk_1` FOREIGN KEY (`id_mission`) REFERENCES `mission` (`id_mission`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `missionVehicule_ibfk_2` FOREIGN KEY (`id_vehicule`) REFERENCES `vehicule` (`id_vehicule`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD CONSTRAINT `utilisateur_ibfk_1` FOREIGN KEY (`id_role`) REFERENCES `role` (`idRole`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
