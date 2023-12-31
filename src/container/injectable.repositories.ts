import { Configuration } from '@configuration/configuration';

import { Logger } from '@ports/logger';

import { PrismaFactory } from '@infrastructure/database/prisma';
import { prismaUserRepositoryFactory } from '@infrastructure/repositories/user-repository.prisma';

export const injectableRepositoriesFactory = (logger: Logger, configuration: Configuration) => {
    const prismaClient = PrismaFactory.getPrismaClient(
        configuration.APPLICATION.DATABASE.URL,
        logger,
    );

    return {
        userRepository: prismaUserRepositoryFactory(logger, prismaClient),
    };
};

injectableRepositoriesFactory.inject = ['logger', 'configuration'] as const;
