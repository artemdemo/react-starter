import { Command } from 'commander';

export type ActionCb = (str: string, options: any) => void;

type CliCommand = {
  name: string;
  description: string;
  action?: ActionCb;
};

export const cliArgsParser = (commands: CliCommand[] = []) => {
  const program = new Command();

  commands.forEach((command) => {
    const subProgram = program
      .command(command.name)
      .description(command.description);
    if (command.action) {
      subProgram.action(command.action);
    }
  });

  program.parse();

  return program;
};
